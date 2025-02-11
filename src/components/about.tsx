const About = () => {
    return (
        <div className="conatiner w-full h-full flex justify-between gap-[1vw] px-[12vw] pt-[22vh]">
            <div className="w-[30vw] flex flex-col gap-[2vh] text-justify">
                <span className="font-petrona font-semibold italic text-[64px]">Como?</span>
                <span className="text-[20px]">Minha paixão por tecnologia me leva a materializar ideias. Exploro problemas, visualizo soluções e escolho as ferramentas certas para construir. A colaboração e o aprendizado contínuo aprimoram meus projetos, enquanto o Arduino me permite prototipar soluções para o mundo real. Se você tem uma ideia, vamos transformá-la em realidade juntos!</span>
            </div>
            <div className="w-[30vw] p-[2rem]">
                <figure className="w-full h-[60%] m-[1vh]"></figure>
                <div className="bg-white rounded-[28px] p-[0.8rem] w-[50%] text-center text-[#333] font-semibold">2 anos de experiência</div>
            </div>
        </div>
    );
}

export default About;