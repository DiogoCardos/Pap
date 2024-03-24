
import Container from "../Container";


const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Sobre nos </h3>
            <p className="mb-2">
              Feito por Diogo Cardoso 
            </p>
            <p>Turma:177</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
