using GitHubCiCd.Controllers;
using Moq.AutoMock;
using Shouldly;

namespace GitHubCiCd.Tests;

public class WeatherForecastControllerTests
{
    [Test]
    public void GetReturnsForecastForFiveDays()
    {
        var mocker = new AutoMocker();
        var controller = mocker.CreateInstance<WeatherForecastController>();

        var forecasts = controller.Get().ToArray();

        forecasts.Length.ShouldBe(5);
    }
}
