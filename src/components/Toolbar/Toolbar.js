import React from 'react';
import './css/Toolbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';
const toolbar = props => (
	<header className='toolbar'>
		<nav className='toolbar_nav'>
			<div>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className='toolbar_logo'>
				<a href='/'>Color-ify</a>
			</div>
			<div className='spacer' />
			<div className='toolbar_nav_items'>
				<ul>
					<li>
						<a href='https://github.com/SaurabhCR7'>Github</a>
					</li>
					<li>
						<a href='https://saurabh-chauhan.netlify.com'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;
