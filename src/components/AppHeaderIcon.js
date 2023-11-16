import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from '@expo/vector-icons/Ionicons';

export const AppHeaderIcon = (props) => {
  return (
      <HeaderButton
          iconSize={24}
          color={'#fff'}
          IconComponent={Ionicons}
          {...props}
      />
  )
}