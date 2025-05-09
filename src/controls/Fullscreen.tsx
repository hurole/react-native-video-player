import type { CustomStyles } from 'react-native-video-player';
import { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

interface FullscreenProps {
  controlButtonCustomStyles: CustomStyles['controlButton'];
  controlIconCustomStyles: CustomStyles['controlIcon'];
  isFullScreen: boolean;
  onToggleFullScreen: () => void;
}

export const Fullscreen = memo(
  ({
    onToggleFullScreen,
    controlIconCustomStyles,
    controlButtonCustomStyles,
    isFullScreen,
  }: FullscreenProps) => {
    return (
      <TouchableOpacity
        onPress={onToggleFullScreen}
        style={[styles.extraControl, controlButtonCustomStyles]}
      >
        {isFullScreen ? (
          <Image
            style={controlIconCustomStyles}
            source={require('../img/fullscreen-off.png')}
          />
        ) : (
          <Image
            style={controlIconCustomStyles}
            source={require('../img/fullscreen.png')}
          />
        )}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  extraControl: {
    color: 'white',
    padding: 8,
  },
});
