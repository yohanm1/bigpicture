package com.bigpicture.bigpicturebackend.controller;

import com.bigpicture.bigpicturebackend.model.NewsArticle;
import com.bigpicture.bigpicturebackend.service.BBCScraperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/bbc")
@CrossOrigin(origins = "http://localhost:4200")
public class BBCController {
    private final BBCScraperService bbcScraperService;

    @Autowired
    public BBCController(BBCScraperService bbcScraperService) {
        this.bbcScraperService = bbcScraperService;
    }

    @GetMapping
    public List<NewsArticle> getBBCNews() {
        return bbcScraperService.fetchBBCNews();
    }
}
