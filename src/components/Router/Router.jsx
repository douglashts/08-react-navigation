import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomePage, DetailsPage, ErrorPage } from '../../pages';

const Menu = () => {
    return <nav>
         <Link to='/'>Home</Link><br/>
         <Link to='/contact'>Contact</Link>
    </nav>
}

const ContactPage = () => <h1>Contato de Exemplo Silvano, Isso e So o Exemplo mesmo, o correto era criar uma pasta para a nova pagina mesmo.<br /> No caso do componente menu seria a mesma coisa, deveria ficar dentro da pasta componentes mesmo.</h1>

const Router = () => {
    return (
        <BrowserRouter>
           
           <Menu />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;