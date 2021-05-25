import Icon from 'components/global/Icon';

export default function Header() {
  return (
    <header>
      <span>header</span>
      <Icon identity={['fa', 'chess-pawn']} kind='solid'></Icon>
      <Icon identity={['custom', 'Notion']} ></Icon>
    </header>
  );
}
