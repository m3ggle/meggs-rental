import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import supabase from "../../../../config/supabaseClient";
import { regexEmail, regexPassword } from "../../../../helper/regexCollection";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";
import { useSignUpEmailPasswordSubmit } from "../hooks/useSignUpEmailPasswordSubmit";

// Todo: different kinds of status like loading error and success, for that use react-query

const SignUpEmailPassword = () => {
  const { control, handleSubmit } = useForm();
  const { email, password } =
    JSON.parse(localStorage.getItem("signUpData")) ?? false;
  const {
    onSubmit,
    handleEmailChange,
    handleGoogle,
    isLoading,
    isLoadingGoogle,
  } = useSignUpEmailPasswordSubmit();
  // const { handleGoogle } = useMultiStepHelper();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: regexEmail,
              message: "Invalid email address",
            },
          }}
          defaultValue={email ? email : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-at"
              onChange={(e) => {
                field.onChange(e);
                handleEmailChange(e);
              }}
              label="Email"
              placeholder="maxMustermann@web.de"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            pattern: {
              value: regexPassword,
              message:
                "Minimum 6 Characters - 1 upper and 1 lower case - 1 letter and 1 special character",
            },
          }}
          defaultValue={password ? password : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-lock"
              onChange={field.onChange}
              label="Password"
              placeholder="••••••"
              type="password"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Create Account"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        firstBtnIsLoading={isLoading}
        secondBtn="secondary"
        secondBtnTitle="Create Account with Google"
        secondBtnType="button"
        secondBtnOnClick={handleGoogle}
        secondBtnIsLoading={isLoadingGoogle}
      />
    </form>
  );
};

export default SignUpEmailPassword;


/*
-- inserts a row into public.users
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
	  p_city_id uuid;
begin
	-- when user not exist in users table
  	case
		when 
      (select not exists(select * from users where users.id = new.id)) and
      new.raw_user_meta_data ? 'first_name' and
      new.raw_user_meta_data ? 'last_name' and
      new.raw_user_meta_data ? 'user_name'
      then 
			-- prep
			-- check if the preferred city exist in preferred cities table, if yes then take the id else null
			select preferred_cities.id 
			into p_city_id
			from preferred_cities 
			where 
				coalesce((new.raw_user_meta_data ->> 'city')::varchar, 'Berlin') = preferred_cities.city and
				coalesce((new.raw_user_meta_data ->> 'province')::varchar, 'Berlin') = preferred_cities.province and
				coalesce((new.raw_user_meta_data ->> 'country')::varchar, 'Germany') = preferred_cities.country;

			 -- p_city_id = id, means there is already the city in preferred cities (use the id)
			 -- p_city_id = null, means the city does not exist in preferred cities (generate id and insert into p...) 
			case when p_city_id is null
				then 
					insert into preferred_cities(latitude, longitude, north, east, south, west, city, province, country)
					values((new.raw_user_meta_data ->> 'latitude')::float, (new.raw_user_meta_data ->> 'longitude')::float, (new.raw_user_meta_data ->> 'north')::float, (new.raw_user_meta_data ->> 'east')::float, (new.raw_user_meta_data ->> 'south')::float, (new.raw_user_meta_data ->> 'west')::float, (new.raw_user_meta_data ->> 'city')::varchar, (new.raw_user_meta_data ->> 'province')::varchar, (new.raw_user_meta_data ->> 'country')::varchar);

          -- setting preferred id  (why this workaround to get the id why not generating uuid v4, because when i call generate... function, the trigger as a whole will not work (2h spend on this bug -_-))
          select preferred_cities.id 
          into p_city_id
          from preferred_cities 
          where 				
            (new.raw_user_meta_data ->> 'city')::varchar = preferred_cities.city and
				    (new.raw_user_meta_data ->> 'province')::varchar = preferred_cities.province and
				    (new.raw_user_meta_data ->> 'country')::varchar = preferred_cities.country;
				else 
			end case;
			
			-- personal information
     	insert into personal_information(id, first_name, last_name)
			values(new.id, (new.raw_user_meta_data ->> 'first_name')::varchar, (new.raw_user_meta_data ->> 'last_name')::varchar);		
			
      -- users
			insert into users(id, email, phone, email_confirmed, phone_confirmed, personal_information_id, preferred_city_id, user_name)
    		values(	new.id, new.email, new.phone, 
					CASE WHEN new.email_confirmed_at is not null THEN true ELSE false END,
					CASE WHEN new.phone_confirmed_at is not null THEN true ELSE false END,
					new.id, p_city_id, (new.raw_user_meta_data ->> 'user_name')::varchar);
	
			else 
        raise exception using
          message='Check your arguments you give the to supabase signUp function. Needed user metadata, for user: user_name, first_name, last_name, for location (optional (default berlin)): latitude, longitude, north, east, south, west, city, province, country.';
	end case;
  
  return new;
end;
$$;



-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


  {"iss":"https://www.googleapis.com/userinfo/v2/me","sub":"117528903227368853380","name":"Huhu","email":"meggle.bande@gmail.com","picture":"https://lh3.googleusercontent.com/a/AEdFTp51s5c5AgJxIuhNmwPUdaS_dAERO3Soadwp8opGGA=s96-c","full_name":"Huhu","avatar_url":"https://lh3.googleusercontent.com/a/AEdFTp51s5c5AgJxIuhNmwPUdaS_dAERO3Soadwp8opGGA=s96-c","provider_id":"117528903227368853380","email_verified":true}
*/