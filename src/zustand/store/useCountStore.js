import { create } from "zustand";
import { combine } from "zustand/middleware";

// 기본 구조
// const store = create(
//   combine(
//     {
//       // 초기 상태 값 들
//       name: "홍길동",
//       age: 20,
//     },
//     (set) => ({}),
//   ),
// );

const useCountStore = create(
  combine(
    {
      count: 0,
    },
    (set) => ({
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    }),
  ),
);

export default useCountStore;
