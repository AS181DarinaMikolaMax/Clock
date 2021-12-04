package com.as181.gateway.utils;

import org.apache.http.client.methods.RequestBuilder;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

import com.as181.gateway.ApiGatewayProperties;

import java.net.URI;

public class URLRequestTransformer extends ProxyRequestTransformer {

    private ApiGatewayProperties apiGatewayProperties;

    public URLRequestTransformer(ApiGatewayProperties apiGatewayProperties) {
        this.apiGatewayProperties = apiGatewayProperties;
    }

    @Override
    public RequestBuilder transform(HttpServletRequest request) throws Exception {
        String requestURI = request.getRequestURI();

        URI uri;
        if (request.getQueryString() != null && !request.getQueryString().isEmpty()) {
            uri = new URI(getServiceUrl(requestURI, request) + "?" + request.getQueryString());

        } else {
            final String t = getServiceUrl(requestURI, request);
            System.out.println(t);
            uri = new URI(t);
        }

        System.out.println(uri);

        RequestBuilder rb = RequestBuilder.create(request.getMethod());
        rb.setUri(uri);
        System.out.println(rb);

        return rb;
    }

    private String getServiceUrl(String requestURI, HttpServletRequest httpServletRequest) throws Exception {

        ApiGatewayProperties.Endpoint endpoint = apiGatewayProperties.getEndpoints().stream()
                .filter(e -> requestURI.matches(e.getPath())
                        && e.getMethod() == RequestMethod.valueOf(httpServletRequest.getMethod()))
                .findFirst().orElseThrow(() -> new Exception(httpServletRequest.getRequestURI()));
        return endpoint.getLocation() + requestURI;
    }
}