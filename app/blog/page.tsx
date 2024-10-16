import Image from 'next/image';
import React from 'react';
import Book from '@/public/images/books.jpg';

const BlogLandingPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl text-center font-bold">Bienvenido a nuestro Blog</h1>
                
            </header>
            <main className="flex-grow p-4">
                <section>
                    <h2 className="text-2xl font-semibold my-4 text-center">Últimas Publicaciones</h2>
                    {/* Mapea tus publicaciones del blog aquí */}
                    {/* Ejemplo: posts.map(post => <Post key={post.id} {...post} />) */}
                </section>


{/*Si dicen que si, maneja los div con los articulos con un flex o grid */}
                <article className="flex bg-white transition hover:shadow-xl max-w-[700px]">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      dateTime="2024-10-16"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>2024</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>Oct 16</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56 min-w-[100px] max-w-300px">
    <Image
      alt=""
      src={Book}
      className="aspect-square h-full w-full object-cover min-w-[100px] max-w-300px"
     
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
          Este es un blog de prueba
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <a
        href="#"
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Leer Blog
      </a>
    </div>
  </div>
</article>
            </main>
            
        </div>
    );
};

export default BlogLandingPage;
