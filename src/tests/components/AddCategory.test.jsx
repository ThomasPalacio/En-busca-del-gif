import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {


    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={ () => {} }/>);
        
        const input = screen.getByRole('textbox');

        fireEvent.input(input , { target: {value:'homero'}})
        
        expect(input.value).toBe('homero')


    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Homero';

        const onNewCategory = jest.fn( );

        render(<AddCategory onNewCategory={ onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input , { target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
        expect(onNewCategory).toHaveBeenCalledTimes(1);

    });


    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn( );

        render(<AddCategory onNewCategory={ onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled(); 
    });


});