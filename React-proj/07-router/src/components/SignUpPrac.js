import { useForm } from "react-hook-form";

export default function SignUpPrac () {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm ();

      const onVaild = (data) => {
        console.log("성공", data);
      };
    
      const onInvaild = (err) => {
        console.log("실패", err);
      };
    return (
        <>
        <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        <h1>react hook form 실습</h1>

        <input 
        type="text"
        placeholder="이름"
        {...register("username",{
            required: "이름이 없으면 안됩니다."
        })}/>
        {errors.username?.message}
        <br />

        <input 
        type="text"
        placeholder="나이"
        {...register("age",{
            required: "0이상의 숫자만 입력 가능합니다.",
            min: {
                value: 1,
                message: "0이상의 숫자만 입력 가능합니다."
            },
        })}
        />
        {errors.age?.message}
        <br />

        <button type="submit">제출</button>
        </form>
        </>
    )
}