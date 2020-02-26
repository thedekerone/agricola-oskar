import React, { useContext } from 'react';
import { MainTitle, MainDescription, NavbarContainer, NavbarExtras, List, NavList, Social } from './styles';
import { FaFacebookF, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { CenterContainer } from '../utils';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';

export const Navbar = () => {
	const { lang } = useContext(ThemeContext);

	return (
		<React.Fragment>
			<NavbarContainer>
				<NavbarExtras>Farm. Food. Life.</NavbarExtras>
				<div>
					<MainTitle>
						<Link href={`${lang && '/' + lang}/`}>
							<a>
								<span color='#FFC914'>Agricola</span> Oskar
							</a>
						</Link>
					</MainTitle>
					<MainDescription>Mango Farmers</MainDescription>
				</div>
				<List>
					<Social>
						<Link href='/es'>
							<a>{lang ? <b>ES</b> : <span>ES</span>} </a>
						</Link>
					</Social>
					<Social>/</Social>
					<Social>
						<Link href='/'>
							<a>{!lang ? <b>EN</b> : <span>EN</span>} </a>
						</Link>
					</Social>
				</List>
			</NavbarContainer>
			<CenterContainer no_margin={true}>
				<NavList>
					<Link href={`/${lang}/`}>
						<li>
							<a>Home</a>
						</li>
					</Link>
					<Link href={`${lang && '/' + lang}/#contact`}>
						<li>
							<a>Contact</a>
						</li>
					</Link>
					<Link href={`${lang && '/' + lang}/#about`}>
						<li>
							<a>About</a>
						</li>
					</Link>
					<Link href={`${lang && '/' + lang}/blog`}>
						<li>
							<a>Blog</a>
						</li>
					</Link>
				</NavList>
			</CenterContainer>
		</React.Fragment>
	);
};
