import { NavbarDemo } from "@/layouts/navbar";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Idashboard() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('image/bg_dashboard.jpg')] bg-cover">
      <NavbarDemo>
        <div className="container mx-auto pt-10">
          <div className="">
            {/* <div className="absolute bottom-[-37rem] hidden md:block">
              <img
                src="image/hero-1.png"
                alt=""
                className="transform -scale-x-100 transition duration-300 ease-in-out hover:scale-105"
                width={300}
                height={300}
              />
            </div> */}
            {/* <div className="h-[48rem] w-[67rem]" style={{ background: "url(image/bg_dashboard2.png)", backgroundSize: "auto" }}> */}
            <div className="">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 relative">
                <div className="md:col-span-1">
                  <div className="relative top-40 hidden lg:block">
                    <img
                      src="image/hero-1.png"
                      alt=""
                      className="transform -scale-x-100 transition duration-300 ease-in-out hover:scale-105"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h1 className="mb-4 text-center text-3xl font-bold">
                    Pesona Digital
                  </h1>
                  <CardHoverEffectDemo />
                </div>
              </div>
              {/* <DummyContent /> */}
            </div>
          </div>
        </div>
      </NavbarDemo>
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
];

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
