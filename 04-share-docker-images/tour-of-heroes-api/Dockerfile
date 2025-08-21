FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

LABEL org.opencontainers.image.source=https://github.com/abrahamgalue/docker-course-gis
LABEL org.opencontainers.image.description="My container image"
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /app

EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000


FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY . .

RUN dotnet publish "tour-of-heroes-api.csproj" -c Release -o /app/publish

FROM base AS final

WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "tour-of-heroes-api.dll"]

