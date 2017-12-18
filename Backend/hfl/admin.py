from django.contrib import admin
from django.core.urlresolvers import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.text import force_text
from django.conf import settings
from models import (
    Agent,
    LandListing,
    ResidentialListing,
    CommercialListing,
    ListingImage,
    ListingVideo
    )



def get_picture_preview(obj):
    print obj.image.url
    if obj.pk:  # if object has already been saved and has a primary key, show picture preview
        return """<a href="{src}" target="_blank"><img src="{src}" alt="{title}" style="max-width: 200px; max-height: 200px;" /></a>""".format(
            src= settings.STATIC_BASE + obj.image.url,
            title=obj.title,
        )
    return _("(choose a picture and save and continue editing to see the preview)")
get_picture_preview.allow_tags = True
get_picture_preview.short_description = _("Picture Preview")


class PictureInline(admin.StackedInline):
    model = ListingImage
    extra = 0
    fields = ["title", "image", get_picture_preview]
    readonly_fields = [get_picture_preview]



class AgentAdmin(admin.ModelAdmin):
    pass

class ResidentialAdmin(admin.ModelAdmin):
    inlines = [PictureInline]

class CommercialAdmin(admin.ModelAdmin):
    pass

class LandAdmin(admin.ModelAdmin):
    pass

class ImageAdmin(admin.ModelAdmin):
    save_on_top = True
    fields = ["listing", "title", "image", get_picture_preview]
    readonly_fields = [get_picture_preview]

class VideoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Agent, AgentAdmin)
admin.site.register(ResidentialListing, ResidentialAdmin)
admin.site.register(CommercialListing, CommercialAdmin)
admin.site.register(LandListing, LandAdmin)
admin.site.register(ListingImage, ImageAdmin)
admin.site.register(ListingVideo, VideoAdmin)

