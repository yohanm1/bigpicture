package com.bigpicture.bigpicturebackend.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import com.bigpicture.bigpicturebackend.model.NewsArticle;

@Service
public class BBCScraperService {
    private static final String BBC_URL = "https://www.bbc.com/news";

    public List<NewsArticle> fetchBBCNews() {
        List<NewsArticle> articles = new ArrayList<>();

        try {
            Document doc = Jsoup.connect(BBC_URL).get();
            Elements articleBlocks = doc.select("div.gs-c-promo");

            for (Element block: articleBlocks) {
                String title = block.selectFirst("h3.gs-c-promo-heading__title").text();
                String link = block.selectFirst("a.gs-c-promo-heading").attr("href");

                if (link.startsWith("/")) {
                    link = "https://www.bbc.com" + link;
                }

                Element imageElement = block.selectFirst("div.gs-c-promo-image img");
                String imageUrl = imageElement != null ? imageElement.attr("src") : "";

                Element snippElement = block.selectFirst("p.gs-c-promo-summary");
                String snippet = snippElement != null ? snippElement.text() : "";

                if (title != "" && link != "" && imageUrl != "" && snippet != "")
                {
                    articles.add(new NewsArticle(title, link, imageUrl, snippet));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return articles;
    }
}
