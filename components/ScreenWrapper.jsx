// import { View, Text } from 'react-native'
// import React from 'react'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

// const ScreenWrapper = ({ childern, bg }) => {
//   // const { top } = useSafeAreaInsets();
  
//   // const paddingTop = top > 0 ? top + 105 : 30;
//   const insets = useSafeAreaInsets();
//   return (
//     <View style={{
//       paddingTop: insets.top,
//       paddingBottom: insets.bottom,
//       paddingLeft: insets.left,
//       paddingRight: insets.right,
//       flex: 1,
//       //backgroundColor: 'lightgray',
//     }}>
//       {childern}
//     </View>
//   )
// }

// export default ScreenWrapper

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, style }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          flex: 1, // Ensures that the wrapper takes the full available screen
        },
        style, // Optional additional styles passed from props
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;