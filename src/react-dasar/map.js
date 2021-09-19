import React from 'react'

const makanan = [
    {
        nama: 'Soto',
        harga: 15000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Rawon',
        harga: 25000
    },
    {
        nama: 'Mie Ayam',
        harga: 7000
    }
];

// reduce
const total_bayar = makanan.reduce((total_harga, makanan,index) => total_harga+makanan.harga,0);


const map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanan.map((makanan,index)=>(
                    <li>{ index+1}.{makanan.nama} - Harga{ makanan.harga}</li>
                ))}
            </ul>
            <h2>Map Filter Harga lebih dari 15000</h2>
             <ul>
                {makanan.filter((makanan)=>makanan.harga > 10000).map((makanan,index)=>(
                    <li>{ index+1}.{makanan.nama} - Harga{ makanan.harga}</li>
                ))}
            </ul>
            <h3>total harga =</h3>
            <ul>
                <li>
                    {total_bayar}
                </li>
            </ul>
        </div>
    )
}

export default map
