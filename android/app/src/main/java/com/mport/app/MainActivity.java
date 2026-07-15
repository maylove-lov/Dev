package com.mport.app;

import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebSettings;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getBridge() != null && getBridge().getWebView() != null) {

            getBridge().getWebView().setBackgroundColor(Color.TRANSPARENT);

            WebSettings settings = getBridge().getWebView().getSettings();

            String ua = settings.getUserAgentString();

            settings.setUserAgentString(ua + " MPorT-App/2.0");
        }
    }
}
