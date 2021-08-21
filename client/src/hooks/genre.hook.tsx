import axios from 'axios';
import { useState, useEffect } from 'react';
import { Gender, getGenders } from '../models/gender';

const useGetGenres = (url:any) => {
    const [ genders, setGenders ] = useState<getGenders>({ data: [], loading: true, error: ''});


    useEffect(() => {
        const getGenres = async() => {
            const res = await axios.get(url);
            const result = res.data.map((gender: Gender) =>  {
                return {
                    name: gender.name,
                    id: gender.id
                }
            });
            setGenders({
                data: result,
                loading: false,
                error: ''
            });
        }
        getGenres();
        return () => {}
    },[url])

    return genders;
}

export default useGetGenres;