(function (window) {
  window.__env = window.__env || {};
  window.__env.enableDebug = false;
  window.__env.dmanGATrackId = 'UA-73818003-5';
  window.__env.awsBucketName = 'conway-s3-dev';  xxxx

  //window.__env.FreightmovementRestURL = '/freightmovement/1.0';  //through the gateway
  //window.__env.InfrastructureRestURL = '/infrastructure/1.0';  //through the gateway
  //window.__env.awsApiBasePath = '/amazonwebservices/1.0';  //through the gateway
  window.__env.FreightmovementRestURL = '/services/freightmovement/v1';     //local testing
  window.__env.InfrastructureRestURL = '/services/infrastructure/v1';  //local testing
  window.__env.awsApiBasePath = '/services/amazonwebservices/v1';  //local testing

  //TCTSJ
  //window.__env.region = 'TCTSJ';
  //window.__env.dmanApiToken = 'XzhCWUxVSEt0ZnNFeDFhd29OUTRCc2JRNnMwYToyUHBXTWNCT2J5S1hvMElYM0ZPcUZuVHBla3dh';
  //window.__env.TokenUrlInternal = 'https://tctsj-api.ltl.xpo.com/token';
  //window.__env.GatewayHostInternal = 'https://tctsj-api.ltl.xpo.com';
  //window.__env.TokenUrlInternal = 'https://localhost:9080/token';   //local testing
  //window.__env.GatewayHostInternal = 'http://localhost:9080';     //local testing

  //TCTS8
  //window.__env.region = 'TCTS8';
  //window.__env.dmanApiToken = 'ZnlyaWxmd3VCXzRFeDBIZ3hJeXE5c0loekdJYTpPT2JzcU9Fd3dDaTBKTEdiREFwRXRXRjFiRjRh';
  //window.__env.TokenUrlInternal = 'https://tcts8-api.ltl.xpo.com/token';
  //window.__env.GatewayHostInternal = 'https://tcts8-api.ltl.xpo.com';

  //TCTSQ
  window.__env.region = 'TCTSQ';
  window.__env.dmanApiToken = 'WVRNa0xQQ0hpVUdMemJ5OVVGc1N5bjdpVTB3YTptTzFjcjRjQmZyMWdhc3J0MU9OUXFXSTU2UEVh';
  //window.__env.TokenUrlInternal = 'https://tctsq-api.ltl.xpo.com/token';  //gateway testing
  //window.__env.GatewayHostInternal = 'https://tctsq-api.ltl.xpo.com';   //gateway testing
  window.__env.TokenUrlInternal = 'https://localhost:9085/token';   //local testing
  window.__env.GatewayHostInternal = 'http://localhost:9085';     //local testing

}(this));
