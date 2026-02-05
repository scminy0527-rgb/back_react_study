import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

// 회원가입이 로그아웃 될 때도 이거 쓸 거기에 따로 만들어놓음
export const initialMember = {
  memberEmail: "",
  memberPassword: "",
  memberName: "",
};

const useAuthStore = create(
  persist(
    combine(
      {
        isLogin: false,
        currentMember: initialMember,
        previousUrl: "/",
      },
      (set) => ({
        // 로그인 여부 확인 및 현재 유저 저장하는거
        setIsLogin: (loginStatus) =>
          set((state) => ({
            // ...state, 생략 가능
            isLogin: loginStatus,
          })),

        setCurrentMember: (member) =>
          set((state) => ({
            currentMember: member,
          })),

        setPreviousUrl: (url) =>
          set((state) => ({
            previousUrl: url,
          })),
      }),
    ),
    {
      name: "auth-store",
    },
  ),
);

export default useAuthStore;
