"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  IconBrandGoogle,
  IconBrandGithub,
  IconBrandDiscord,
} from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInType, signUpType } from "@/lib/types";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const SignInform = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const SignUpform = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const handleSignIn = async (data: signInType) => {
    const { email, password } = await signInSchema.parseAsync(data);
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard",
      fetchOptions: {
        onRequest() {
          setIsLoading(true);
        },
        onSuccess(ctx) {
          toast({
            title: "Successfully signed in",
          });
          console.log("signin up ", ctx);
          setIsLoading(false);
          SignInform.reset();
        },
        onError(ctx) {
          toast({
            title: "Sign in failed",
            description: ctx.error.message,
          });
          setIsLoading(false);
        },
      },
    });
  };
  const handleSignUp = async (data: signUpType) => {
    const validated = await signUpSchema.parseAsync(data);
    const { firstName, lastName, email, password } = validated;
    await authClient.signUp.email({
      name: firstName + " " + lastName,
      email,
      password,
      fetchOptions: {
        onRequest() {
          setIsLoading(true);
        },
        onSuccess(ctx) {
          toast({
            title: "Successfully signed up",
            description: "Check your email for verification link",
          });
          console.log("signed up ", ctx);
          setIsLoading(false);
          router.push("/dashboard");
          SignUpform.reset();
        },
        onError(ctx) {
          toast({
            title: "Sign up failed",
            description: ctx.error.message,
          });
          setIsLoading(false);
        },
      },
    });
  };

  const handleProviderSignIn = async (provider: string) => {
    switch (provider) {
      case "google":
        await authClient.signIn.social({
          provider: provider,
          callbackURL: "/dashboard",
          fetchOptions: {
            onSuccess() {
              toast({
                title: "Successfully signed in",
                description: provider,
              });
            },
          },
        });
        break;
      case "github":
        await authClient.signIn.social({
          provider: provider,
          callbackURL: "/dashboard",
          fetchOptions: {
            onSuccess() {
              toast({
                title: "Successfully signed in",
                description: provider,
              });
            },
          },
        });
        break;
      case "discord":
        await authClient.signIn.social({
          provider: provider,
          callbackURL: "/dashboard",
          fetchOptions: {
            onSuccess() {
              toast({
                title: "Successfully signed in",
                description: provider,
              });
            },
          },
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col h-full w-full lg:grid lg:grid-cols-2 overflow-hidden">
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 lg:py-0">
        <Tabs defaultValue="signin" className="w-[350px] rounded-xl">
          <TabsList>
            <TabsTrigger value="signin">SignIn</TabsTrigger>
            <TabsTrigger value="signup">SignUp</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="border-none">
              <CardHeader className="p-2">
                <CardTitle className="font-bold text-xl">
                  Welcome to Plura Ai
                </CardTitle>
                <CardDescription>
                  SignIn to Plura and continue managing your saas!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <div className="flex flex-row items-center justify-between">
                  <Button
                    onClick={() => {
                      handleProviderSignIn("google");
                    }}
                  >
                    <IconBrandGoogle className="size-5" /> Google
                  </Button>
                  <Button
                    onClick={() => {
                      handleProviderSignIn("github");
                    }}
                  >
                    {" "}
                    <IconBrandGithub className="size-5" /> GitHub
                  </Button>
                  <Button
                    onClick={() => {
                      handleProviderSignIn("discord");
                    }}
                  >
                    {" "}
                    <IconBrandDiscord className="size-5" /> Discord
                  </Button>
                </div>
                <Form {...SignInform}>
                  <form
                    onSubmit={SignInform.handleSubmit(handleSignIn)}
                    className="space-y-8"
                  >
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />
                    <div className="flex flex-col w-full gap-2 items-center justify-between">
                      <div className="flex flex-col w-full gap-2">
                        <FormField
                          control={SignInform.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="example@email.com"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex flex-col w-full gap-2">
                        <FormField
                          control={SignInform.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder="123"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button className="w-full mt-2" disabled={isLoading}>
                        Continue
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="p-0">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="hover:bg-background"
                >
                  Forgot password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="border-none">
              <CardHeader className="p-2">
                <CardTitle className="font-bold text-xl">
                  Welcome to Plura Ai
                </CardTitle>
                <CardDescription>
                  SignIn to Plura and continue managing your saas!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <div className="flex flex-row items-center justify-between">
                  <Button>
                    <IconBrandGoogle className="size-5" /> Google
                  </Button>
                  <Button>
                    {" "}
                    <IconBrandGithub className="size-5" /> GitHub
                  </Button>
                  <Button>
                    {" "}
                    <IconBrandDiscord className="size-5" /> Discord
                  </Button>
                </div>
                <Form {...SignUpform}>
                  <form onSubmit={SignUpform.handleSubmit(handleSignUp)}>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />
                    <div className="flex flex-col w-full gap-2 items-center justify-between">
                      <div className="flex flex-row items-start justify-between gap-2">
                        <div className="flex flex-col gap-2">
                          <FormField
                            control={SignUpform.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="saidev" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <FormField
                            control={SignUpform.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="gupta" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col w-full gap-2">
                        <FormField
                          control={SignUpform.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="exmaple@email.com"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex flex-col w-full gap-2">
                        <FormField
                          control={SignUpform.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123"
                                  type="password"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <FormField
                          control={SignUpform.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirm Password</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="***"
                                  {...field}
                                  type="password"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button className="w-full mt-2" disabled={isLoading}>
                        Continue
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>

              {/* <CardFooter className="p-0">
                      <Button variant={"ghost"} size={"sm"} className="hover:bg-background">
                        Forgot password
                      </Button>
              </CardFooter> */}
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="hidden md:flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-8 lg:py-0">
          <span className="flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            Talk to any website using okokoa sss okokokks sssss
          </span>
        </div>
      </div>

      <div className="hidden lg:block lg:absolute lg:top-0 lg:bottom-0 lg:left-1/2 lg:border-l lg:border-secondary" />
    </div>
  );
}
