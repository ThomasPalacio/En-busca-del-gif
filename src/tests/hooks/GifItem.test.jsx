import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem/>', () => {
    
    const title = 'Homero';
    const url = 'https://los-simpsons.com/homer.png'

    test('Debe hacer match con el snapshot', () => {
        
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
        
        render(<GifItem title={title} url={url}/>)
        // screen.debug()
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });
});