package com.as181.gateway.utils;

import org.apache.http.client.methods.RequestBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URISyntaxException;

public abstract class ProxyRequestTransformer {

    protected ProxyRequestTransformer predecessor;

    public abstract RequestBuilder transform(HttpServletRequest request) throws Exception;

    public void setPredecessor(ProxyRequestTransformer transformer) {
        this.predecessor = transformer;
    }
}