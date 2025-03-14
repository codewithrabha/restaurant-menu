
import * as Haptics from 'expo-haptics';

export const lightHaptics = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};

export const mediumHaptics = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};
