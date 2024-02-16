import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Prueba en <GifExpertApp/>', () => {
    
    const newCategory = 'Friends';

    test('Debe de retornar categorias nuevas  ', () => {
        const {container} = render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{ target: { value: newCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{level: 2}).length).toBe(1);
    
    })


    test('No debe de agregar una categoria si ya existe', () => {
        
        const { container } =render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: newCategory} });
        fireEvent.submit(form);

        fireEvent.input(input, {target:{value: newCategory} });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{level:2}).length).toBe(1);
    });
    ;});