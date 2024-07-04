import Link from 'next/link';
export default function Header() {
  return (
    <div className='w-full absolute text-white  z-10'>
      <ul className='flex justify-between items-center p-8 mx-auto'>
        <li>
          <Link className='font-bold text-3xl' href={'/'}>
            home
          </Link>
        </li>
        <li>
          <Link className='font-bold text-3xl' href={'/performance'}>
            performance
          </Link>
        </li>
        <li>
          <Link className='font-bold text-3xl' href={'/reliablity'}>
            reliablity
          </Link>
        </li>
        <li>
          <Link className='font-bold text-3xl' href={'/scale'}>
            scale
          </Link>
        </li>
      </ul>
    </div>
  );
}
