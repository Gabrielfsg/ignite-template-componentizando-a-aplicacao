import { Button } from './Button';


interface GenreResponseItemProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreListProps {
  genres: GenreResponseItemProps[];
  escolherCategoria (id: number) : any;
  idSelect: number;
}


export function SideBar(props: GenreListProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
    <div className="buttons-container">
    {props.genres.map(prop => (
          <Button
            key={String(prop.id)}
            title={prop.title}
            iconName={prop.name}
            onClick={() => props.escolherCategoria(prop.id)}
            selected={props.idSelect === prop.id} />
    ))}
     </div>
    </nav>
  )
}