package demo;

import com.intuit.karate.junit5.Karate;

public class FeatureRunner {

  @Karate.Test
  public Karate testNominalScenario() {
    return Karate
            .run("features/coffee")
            .tags("@Nominal")
            .relativeTo(getClass());
  }
}
