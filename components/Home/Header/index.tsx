import Icon from 'components/global/Icon';
import { useMemo } from 'react';

export default function Header() {

  const navList = useMemo (()=>{
    return ([
      {name: 'Profile', href: '/#profile'},
      {name: 'Skills', href: '/#skills'},
      {name: 'Projects', href: '/#projects'},
    ])
  },[]) 

  return (
    <header className={'fixed'}>
      <div className={'flex flex-row p-4 justify-between items-center w-screen h-16 bg-primary-900'}>
        <div>
          <Icon identity={['fa', 'chess-pawn']} kind='solid'
            className={' w-12 h-12 '}
          />
        </div>
        <nav>
          <ul className={'flex flex-row justify-center text-2xl'}>
            {navList.map((e,i)=>
            <li className={' ml-4 '} key={`${i}-${e.name}`}>
              <a href={e.href}>{e.name}</a>
            </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// <Icon identity={['custom', 'Notion']} ></Icon>
