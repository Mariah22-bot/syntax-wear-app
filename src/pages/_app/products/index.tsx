import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="container">
            <h1 className='text-black'>Olá</h1>

            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
    )
}
