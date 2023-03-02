import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Support Work',
    path: '/',
    icon: <MdIcons.MdAssistant />,
    cName: 'nav-text'
  },
  {
    title: 'Training',
    path: '/training',
    icon: <MdIcons.MdModelTraining />,
    cName: 'nav-text'
  },
  {
    title: 'POCs',
    path: '/poc',
    icon: <MdIcons.MdVerified />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/project',
    icon: <MdIcons.MdOutlineFactCheck />,
    cName: 'nav-text'
  },
  {
    title: 'Job/Project Postings',
    path: '/postings',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text'
  },
  {
    title: 'Community Chat',
    path: '/chat',
    icon: <FaIcons.FaRocketchat/>,
    cName: 'nav-text'
  }
];