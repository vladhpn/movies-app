import { NavLink } from 'react-router-dom';

export const HeaderMenuLink = (card) => {
  const activeStyle = 'bg-purple-500 ';
  const baseStyle = 'flex items-center text-white mr-4 rounded p-2 hover:bg-zinc-700 text-xl ';

  return (
    <NavLink to={card.to}>
      {({ isActive }) => (
        <p className={isActive ? baseStyle + activeStyle : baseStyle}>
          <span className='mr-1'>{card.icon}</span> <span>{card.lable}</span>
        </p>
      )}
    </NavLink>
  );
};
