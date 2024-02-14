
import Navigation from "@/components/navigation";
import Image from "next/image";
import { pricingCards } from "../constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  return (
    <>
    <main className="h-full ">
    <Navigation />
    <section className="h-full w-full pt-[400px] relative flex items-center justify-center flex-col">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] 
    [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]
     "/>
      <p className="text-center">
      Courez vers le futur
    </p>
    <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
    <h1 className="text-9xl font-bold text-center md:text-[200px] text-indigo-400">
       V-Vision
    </h1>
    </div>
    <div className="flex justify-center item-center relative md:mt-[-70px]">
      <Image 
      src={'/assets/preview.png'}
      alt="banner image"
      height={1200}
      width={1200}
      className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
      />
    </div>
    </section>

    <section className="flex pt-[350px] justify-center items-center flex-col gap-4 md:mt-[100px]">
      <h2 className="text-4xl text-center">Choisissez ce qui vous convient</h2>
      <p className="text-muted-foreground text-center">Notre plan tarifaire simple est adapté à vos 
      besoins. Si vous n'êtes pas prêt à vous engager, vous pouvez commencer gratuitement.</p>
      <div className="flex items-center justify-center gap-4 flex-wrap mt-[55px]">
        {pricingCards.map((card) =>(
          <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between',{
            'border-2 border-primary': card.title === "Unlimited Saaas"
          })}>
            <CardHeader>
              <CardTitle className={clsx("",{"text-muted-foreground":card.title !== "Unlimited Saaas" })}>
                {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">/m</span>
            </CardContent>
            <CardFooter className="flex flex--col items-center gap-4">
              <div>{card.features.map((feature) =>(
                <div key={feature} className="flex gap-2 items-center">
                  <Check className="text-muted-foreground"/>
                  <p>{feature}</p>
                </div>
              ))}
              </div>
              <Link href={`/sign-up?plan=${card.priceId}`} className={clsx("w-full text-center bg-primary p-2 rounded-md", {'!bg-muted-foreground': card.title !== "Unlimited Saas"})}>
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
    </main>
    </>
  )
}

