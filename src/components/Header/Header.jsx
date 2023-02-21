import { HeaderMenuLink } from '../HederMenuLink/HeaderMenuLink';

import { links } from '../../core/links/links';

export const Header = () => {
  return (
    <div className='bg-zinc-900 px-20 py-7 flex items-center justify-between'>
      <h2 className='text-white text-4xl'>
        <a  href='/'>
          Movie<span className='text-purple-500'>APP</span>
          </a>
      </h2>

      <ul className='flex items-center'>
        {links.map((link) => (
          <li key={link.id}>
            <HeaderMenuLink icon={link.icon} lable={link.label} to={link.to}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
