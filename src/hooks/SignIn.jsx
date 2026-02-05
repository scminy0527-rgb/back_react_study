import React from "react";
import { useForm } from "react-hook-form";

// 로그인
const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange" });

  const signUp = async (datas) => {
    // fetch 요청
    console.log(datas);
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <div>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <label>
            <span>이메일</span>
            <input
              type="text"
              name="memberEmail"
              id="memberEmail"
              {...register("memberEmail", {
                required: true,
                pattern: {
                  value: emailRegex,
                },
              })}
            />
            {errors?.memberEmail?.type === "required" && (
              <p>이메일을 입력하세요.</p>
            )}
            {errors?.memberEmail?.type === "pattern" && (
              <p>이메일 양식에 맞게 입력하세요.</p>
            )}
          </label>
        </div>

        <div>
          <label>
            <span>비밀번호</span>
            <input
              type="password"
              name="memberPassword"
              id="memberPassword"
              {...register("memberPassword", {
                required: true,
                pattern: {
                  value: passwordRegex,
                },
              })}
            />
            {errors?.memberPassword?.type === "required" && (
              <p>비밀번호를 입력하세요.</p>
            )}
            {errors?.memberPassword?.type === "pattern" && (
              <p>
                소문자, 숫자, 특수문자를 각각 하나 포함한 8자리 이상이어야
                합니다.
              </p>
            )}
          </label>
        </div>
        <button disabled={isSubmitting}>로그인</button>
      </form>
    </div>
  );
};

export default SignIn;
