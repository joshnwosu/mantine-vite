import {
  MantineProvider,
  SegmentedControl,
  Text,
  createStyles,
} from "@mantine/core";
import { useEffect } from "react";

const useStyle = createStyles((theme) => ({
  title: {
    fontSize: 20,
    color: theme.colors[theme.primaryColor][6],
  },
}));

export default function App() {
  const { classes, theme } = useStyle();
  useEffect(() => {
    alert(theme.colorScheme);
  }, []);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text className={classes.title}>Welcome to Mantine!</Text>
      <SegmentedControl
        data={["All", "Iyana Ipaja", "Ajah", "Lekki", "Ikoyi", "Egbeda"]}
      />
    </MantineProvider>
  );
}
