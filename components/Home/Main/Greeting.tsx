import Image from 'next/image';

export default function Greeting() {
  return (
    <section
      className={
        'w-full h-screen min-h-device bg-neutral-800 flex flex-col justify-center items-center'
      }
    >
      <div
        className={' border-8 border-solid border-primary-800'}
      >
        <Image
          src='/profile.png'
          alt='Picture of the author'
          className={'object-cover'}
          width='200'
          height='200'
        />
      </div>
      <p className={'text-neutral-100 text-5xl font-normal mt-4'}>
        안녕하세요.
      </p>
      <p className={'text-neutral-100 text-5xl font-light mt-4'}>
        프론트엔드 개발자 <span className={'font-bold'}>박재현</span>입니다
      </p>
    </section>
  );
}
