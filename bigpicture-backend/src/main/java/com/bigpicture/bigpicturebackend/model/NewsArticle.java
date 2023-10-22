package com.bigpicture.bigpicturebackend.model;

public class NewsArticle {
    private String title;
    private String link;
    private String imageUrl;
    private String snippet;

    public NewsArticle(String title, String link, String imageUrl, String snippet) {
        this.title = title;
        this.link = link;
        this.imageUrl = imageUrl;
        this.snippet = snippet;
    }

    public String getTitle() {
        return this.title;
    }

    public String getLink() {
        return this.link;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public String getSnippet() {
        return this.snippet;
    }
}
