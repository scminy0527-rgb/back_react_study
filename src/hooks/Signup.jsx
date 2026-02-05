import React from "react";
import { useForm } from "react-hook-form";

// 회원가입
const Signup = () => {
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

        <div>
          <label>
            <span>비밀번호 확인</span>
            <input
              type="password"
              name="memberPasswordConfirm"
              id="memberPasswordConfirm"
              {...register("memberPasswordConfirm", {
                required: true,
                validate: {
                  matchPassword: (memberPasswordConfirm) => {
                    const { memberPassword } = getValues();
                    console.log(
                      memberPassword,
                      memberPasswordConfirm,
                      memberPassword === memberPasswordConfirm,
                    );
                    return memberPassword === memberPasswordConfirm;
                  },
                },
              })}
            />
            {errors?.memberPasswordConfirm?.type === "matchPassword" && (
              <p>비밀번호가 일치하지 않습니다.</p>
            )}
          </label>
        </div>

        {/* 체크박스 */}
        <div>
          <p>취미</p>
          <label>
            <span>축구</span>
            <input {...register("hobbies")} type="checkbox" value="soccer" />
          </label>
          <label>
            <span>농구</span>
            <input
              {...register("hobbies")}
              type="checkbox"
              value="basketBall"
            />
          </label>
          <label>
            <span>야구</span>
            <input {...register("hobbies")} type="checkbox" value="baseBall" />
          </label>
        </div>
        <button disabled={isSubmitting}>회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
