import React from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";
import Background from "layouts/Background";

export default function Login() {
  return (
    <>  
        <section className=" relative z-1 py-30 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 text-white mt-22">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                 
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMHNob3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Baby Shower
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1482731910308-31e96e5d1d28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Birthday
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                 
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdXNlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                   Nyumba Kumi
                  </h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className=" relative z-1 py-30 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 text-white mt-20">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                 
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://businesstoday.co.ke/wp-content/uploads/2017/05/Self-help-Group-Chama.jpg"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Chama
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://nairobinews.nation.co.ke/wp-content/uploads/2018/10/Ruracio.jpg"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Ruracio
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link href="/admin/dashboard">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                   Wedding
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative z-1 py-30 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 text-white mt-20">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                 
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1518199183058-bc0458c2681e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Aniversary
                  </h5>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlYXRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Death
                  </h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Login.layout = Background;
