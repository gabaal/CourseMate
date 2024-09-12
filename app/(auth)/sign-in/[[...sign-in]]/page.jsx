import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto px-10 py-24 lg:items-center">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
            Sign in to CourseMate.
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto">
        <SignIn />
      </div>
    </section>
  );
}
