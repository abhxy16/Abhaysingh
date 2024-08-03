/**
 * v0 by Vercel.
 * @see https://v0.dev/t/he346wcFpBl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Your Name</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm John Doe</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I'm a passionate full-stack developer with a love for creating beautiful and functional web
                  applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get in Touch
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse set of skills that I've developed over the years, allowing me to tackle a wide range
                  of web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Front-end Development</h3>
                <p className="text-muted-foreground">
                  Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React and Vue.js.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Back-end Development</h3>
                <p className="text-muted-foreground">
                  Experienced in building scalable and efficient server-side applications using Node.js, Express, and
                  databases like PostgreSQL and MongoDB.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">DevOps and Deployment</h3>
                <p className="text-muted-foreground">
                  Knowledgeable in cloud infrastructure, containerization with Docker, and continuous
                  integration/deployment pipelines.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I've worked on, showcasing my skills and experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="mx-auto aspect-video w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="text-primary-foreground text-2xl font-bold">Project 1</div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 2"
                    className="mx-auto aspect-video w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="text-primary-foreground text-2xl font-bold">Project 2</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 3"
                    className="mx-auto aspect-video w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="text-primary-foreground text-2xl font-bold">Project 3</div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 4"
                    className="mx-auto aspect-video w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="text-primary-foreground text-2xl font-bold">Project 4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm always excited to connect with new people and discuss potential collaborations or projects. Feel
                  free to reach out using the form below.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                  <Textarea placeholder="Message" className="max-w-lg flex-1" />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}