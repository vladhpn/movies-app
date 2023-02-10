import { HeaderMenuLink } from '../HederMenuLink/HeaderMenuLink';

import { links } from '../../core/links/links';

export const Header = () => {
  return (
    <div className='container bg-zinc-900 px-6 py-7  mx-auto flex items-center justify-between'>
      <h2 className='text-white text-4xl'>
        Movie<span className='text-purple-500'>APP</span>
      </h2>

      <ul className='flex items-center'>
        {links.map((link) => (
          <li key={link.id}>
            <HeaderMenuLink icon={link.icon} lable={link.label} />{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
