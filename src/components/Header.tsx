import { NavLink } from 'react-router'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-brand">
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header