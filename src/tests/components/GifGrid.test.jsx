import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Prueba en <GifGrid/>', () => {
    const category = 'Friends';
    
    test('Debe de mostrar el loding inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img'))
        expect(screen.getByText(category.toUpperCase())) 
    });


    test('Debe de mostar items cuando se cargan las imagenes', () => {
        const gifs = [{
            id:'abc',
            title:'Friends',
            url:'https://addadsa.com'
        },
        {
            id:'abc322',
            title:'Goku',
            url:'https://ssfdsfs.com'
        }
    
    ]
        
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })
        const gifGrid = render(<GifGrid category={category}/>)
        
        expect(screen.getAllByRole('img').length).toBe(2);
        
        expect(gifGrid).toMatchSnapshot()
    });
});