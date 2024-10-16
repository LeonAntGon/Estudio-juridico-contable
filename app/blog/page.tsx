import React from 'react';

const BlogLandingPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl text-center font-bold">Bienvenido a nustro Blog</h1>
                
            </header>
            <main className="flex-grow p-4">
                <section>
                    <h2 className="text-2xl font-semibold my-4 text-center">Últimas Publicaciones</h2>
                    {/* Mapea tus publicaciones del blog aquí */}
                    {/* Ejemplo: posts.map(post => <Post key={post.id} {...post} />) */}
                </section>
            </main>
            
        </div>
    );
};

export default BlogLandingPage;
