import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    children: React.ReactNode;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2
                         hover:bg-primary-500 cursor-pointer transition duration-200
                         hover:text-white"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
      {children}
    </AnchorLink>
  )
}

export default ActionButton;